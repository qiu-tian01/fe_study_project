/*
 * @author: qiutian
 * @Date: 2022-06-27 17:00:03
 * @Description: IndexDB 的方法封装
 * @params: Do not edit
 */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
export default class IDBS {
    name = null
    version = 1
    db = null
    ready = false;
    tableName = null;
    constructor(options) {
        const { databaseName, version, tableName } = options;
        this.name = databaseName;
        this.version = version;
        this.tableName = tableName;
        this.openAndUpgradeDataBase(databaseName, version, tableName)
    }
    async getDataBase() {
        const res = await this.openAndUpgradeDataBase(this.name, this.version, this.tableName);
        return res;
    }
    openAndUpgradeDataBase(databaseName, version, tableName) {
        return new Promise((resolve, reject) => {
            try {
                /*
                 *@databaseName 数据仓库的名字
                 *@version 数据仓库的版本
                 */

                const request = window.indexedDB.open(databaseName, version);
                /*
                 *数据仓库打开失败
                 */
                request.onerror = (error) => {
                    console.log('IndexDB打开失败', error);
                }

                /*
                 *数据仓库打开成功
                 */
                request.onsuccess = (res) => {
                    const db = res.target.result;
                    console.log('IndexDB打开成功');
                    this.db = db;
                    this.ready = true;
                    resolve({ db: db });
                }

                /*
                 *数据仓库升级事件(第一次新建库是也会触发，因为数据仓库从无到有算是升级了一次)
                 */
                request.onupgradeneeded = (res) => {
                    const db = res.target.result;
                    // this.db = db;
                    debugger
                    if (!db.objectthis.tableNames.contains(tableName)) {
                        let table = db.createObjectStore(tableName, { keyPath: 'id' }); // 创建数据库表
                        // table.createIndex(indexName, indexName, { unique: false });// 创建表索引
                    }
                }

            } catch (error) {
                throw new Error(error);
            }

        })


    }
    async getTable(readonly = false) {
            const { db } = await this.getDataBase();
            const transaction = db.transaction([this.tableName], readonly ? 'read' : 'readwrite'); // 事务
            const table = transaction.objectStore(this.tableName); // 仓库对象
            return table;
        }
        /**
         * add
         * @param {*} data 
         * @returns 
         */
    async addData(data) {
            const table = await this.getTable();
            const request = table.add(data);
            return this.handleIDResponse(request);
        }
        /**
         * delete
         * @param {Number} id 
         */
    async deleteDataById(id) {
            const table = await this.getTable();
            const request = table.delete(id);
            return this.handleIDResponse(request, (data, resolve) => {
                resolve(data);
                console.info('delete success:', data);
            }, (err, reject) => {
                reject(err);
            });
        }
        /**
         * update
         * @param {Object} data 
         * @returns 
         */
    async updateData(data) {
            const table = await this.getTable();
            const request = table.put(data);
            return this.handleIDResponse(request, (data, resolve) => {
                resolve(data);
                console.info('update success:', data);
            }, (err, reject) => {
                reject(err);
            });
        }
        /**
         * query
         * @param {*} key 
         * @returns 
         */
    async getDataById(id) {
        const table = await this.getTable();
        const request = table.get(id);
        return this.handleIDResponse(request, (data, resolve) => {
            resolve(data);
            console.info('query result:', data);
        }, (err, reject) => {
            reject(err);
        });
    }

    async queryList() {
        const table = await this.getTable();
        const request = table.openCursor();
        const list = [];
        return new Promise((resolve, reject) => {
            request.onsuccess = function(e) {
                let cursor = e.target.result
                if (cursor) {
                    // 必须要检查
                    list.push(cursor.value)
                    cursor.continue() // 遍历了存储对象中的所有内容
                } else {
                    resolve(list)
                }
            }
            request.onerror = function(e) {
                reject(e)
            }
        })
    }

    handleIDResponse(IDResponse, onsuccess = e => e, onerror = e => e) {
            return new Promise((resolve, reject) => {
                IDResponse.onerror = (err) => {
                    onerror(err.target.error, reject);
                    reject(err.target.error);
                    throw new Error(err.target.error);
                };
                IDResponse.onsuccess = (e) => {
                    onsuccess(IDResponse.result, resolve, e);
                    resolve(IDResponse.result);
                };
            });
        }
        /**
         * 删除数据库
         * @param {String} dbName 
         * @returns 
         */
    static deleteDataBase(dbName) {
            console.log(dbName)
            let deleteRequest = window.indexedDB.deleteDatabase(dbName)
            return new Promise((resolve, reject) => {
                deleteRequest.onerror = function(err) {
                    console.log('删除失败');
                    reject(err);
                }
                deleteRequest.onsuccess = function(event) {
                    console.log('删除成功');
                    resolve(event);
                }
            })
        }
        /**
         * 关闭数据库连接
         */
    async closeDB() {
        const { db } = await this.getDataBase();
        db.close();
        console.log('数据库已关闭')
    }
}
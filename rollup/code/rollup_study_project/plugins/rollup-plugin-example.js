/*
 * @author: qiutian
 * @Date: 2021-10-25 11:48:42
 * @Description: Do not edit
 * @params: Do not edit
 */

export default function removeConsole() {
    return {
        name: 'remove-console',
        transform(code, id) {

            const Reg = /console\.log\(.*\)/ig;
            console.log('result', code.replace(Reg, ""))
            return code.replace(Reg, "")
        },
    }
}

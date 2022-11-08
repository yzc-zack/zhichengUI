/*
 * @Author: zhicheng.yao zhicheng.yao@enesource.com
 * @Date: 2022-11-08 15:05:44
 * @LastEditors: zhicheng.yao zhicheng.yao@enesource.com
 * @LastEditTime: 2022-11-08 15:20:52
 * @FilePath: \npmdemo\zhicheng-ui\examples\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import button from './button/button.vue'

const components = [button]
export default {
    install: (app, options) => {
        components.forEach((item) => {
            app.component(item.name, item)
        })
    }
}

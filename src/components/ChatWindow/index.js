const constructor = Vue.extend(require("./index.vue").default);
import Vue from "vue";
let nId = 1;
const chatPannel = () => {
  return new Promise((resolve, reject) => {
    let id = "editDialog-" + nId++;
    const instance = new constructor({
      data: {},
      methods: {
        onCancel() {
          this.hideComp();
          reject({ confirm: false });
        },
        onConfirm() {
          this.hideComp();
          resolve({ confirm: true });
        }
      }
    });
    instance.id = id;
    instance.vm = instance.$mount(); // 挂载但是并未插入dom，是一个完整的Vue实例
    instance.vm.visable = true;
    instance.dom = instance.vm.$el;
    document.body.appendChild(instance.dom); // 将 dom 插入body
    const hideComp = instance.vm.hideComp;

    return instance.vm;
  });
};

export default {
  install: Vue => {
    Vue.prototype.$chat = chatPannel; // 将 EditDialog组件暴露出去，并挂载在Vue的prototype上
  }
};

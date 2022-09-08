Vue.component('component2', {
    template: '<div>{{message}}</div>',
    data: function () {
        return {
            message: 'This is global',
        };
    },
});
var component1 = {
    template: '<div>This is local</div>'
}
var app = new Vue({
    el: '#app',
    data: {
        text: 'hello vue',
    },
    components: {
        component1,
    }
})
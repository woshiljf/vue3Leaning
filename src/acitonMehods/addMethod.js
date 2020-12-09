import { reactive, computed } from 'vue'

function addMethod() {
    var state = reactive({

        todoList: [{
                id: 1,
                name: "小狗",
                age: 18
            },
            {
                id: 2,
                name: "小猪",
                age: 20
            },
            {
                id: 3,
                name: "小猫",
                age: 10
            }

        ],
        data: {
            id: 0,
            name: '',
            age: 0
        }


    })

    function addData(e) {

        e.preventDefault()
        var temp = Object.assign({}, state.data)

        state.todoList.push(temp)

        state.data.id = 0
        state.data.name = ''
        state.data.age = 0
    }
    let total = computed(() => state.todoList.length)
    return {

        addData,
        state,
        total
    }
}

export default addMethod
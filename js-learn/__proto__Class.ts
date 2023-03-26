class Student  {
    static numw = 3
    constructor( public num=1 ) {}
}

class BadStudents extends Student {
    constructor (name='Mike' ) {
        super(3)

    }
}



console.log(String(BadStudents.__proto__.numw))

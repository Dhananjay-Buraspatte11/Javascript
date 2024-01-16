const student={
    name:"Dhananjay",
    age:23,
    company:"Capgemini",
    math:80,
    physics:70,
    chemistry:50,
    getAvg(){
     let avg=(this.math+this.physics+this.chemistry)/3
     console.log(avg);
    }
}
student.getAvg()
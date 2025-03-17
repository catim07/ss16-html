let math = prompt("mời bạn nhập điểm môn toán: ");
let physics = prompt("mời bạn nhập điểm môn vật lí: ");
let chemistry = prompt("mời bạn nhập điểm môn hóa học: ");
let average = (parseFloat(math)+parseFloat(physics)+parseFloat(chemistry))/3
document.writeln(` Điểm trung bình 3 môn là: ${average}`);
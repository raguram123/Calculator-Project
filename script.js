let output = document.getElementById("output");

         function display(num) {
            output.value += num;
         }
         
         function calculate() {
            try{
                output.value = eval(output.value);
            }
            catch(err)
            {
                alert("Invalid");
            }
         }

         function Clear() {
            output.value = "";
         }

         function Del() {
            output.value = output.value.slice(0,-1);
         }

         function Percentage(){
            output.value = (output.value/100).toLocaleString();
         }

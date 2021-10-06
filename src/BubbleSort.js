function BubbleSort(array) {
    var ult = array.length;
    for (let i = 0; i < array.length; i++) {
        let num_trocas = 0
        for (let j = 0; j < ult ; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                num_trocas+=1;
                            
            }
            
        } 
             
        ult -=1;
        if (num_trocas == 0) {
            break;
        }
    }
}


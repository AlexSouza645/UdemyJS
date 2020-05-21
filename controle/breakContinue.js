const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {//x indice de nums
    if (x == 5) {
        break// sai do laço e parte p/ o próximo bloco de código
    }// break nao utiliza if e sim a repetição mais perto dele
    console.log(`x= ${nums[x]}`)
}

for (y in nums) {//y indice de nums
    if (y==5){
        continue// desvio de fluxo no mesmo bloco
    }console.log(`${y}= ${nums[y]}`)
}

//rótulo
externo : for (a in nums){
    for (b in nums) {
        if (a ==2 && b == 3) break externo
        console.log (`Par = ${a},${b}`)
    }
}

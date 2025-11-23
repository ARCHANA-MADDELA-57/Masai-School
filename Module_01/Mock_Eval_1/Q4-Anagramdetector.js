function solve(str1, str2) {
    // write your code
    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();
    let sortedStr1 = s1.replace(/[^a-z0-9]/g, '').split('').sort().join('');
    let sortedStr2 = s2.replace(/[^a-z0-9]/g, '').split('').sort().join('');
    if (sortedStr1 === sortedStr2) {
        console.log('True');
    } else {
        console.log('False');
    }
  }
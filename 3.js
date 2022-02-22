    // Create a Promised based function that will check a string to determine if it's length is greater than 10.
    // If the length is greater than ten console log "Big word". 
    // If the length of the string is less than 10 console log "Small Number"

let sent = 'Hello'
function lengthOf(str){
    return new Promise(
        (resolve)=>{
            str.length>10 ? resolve(true) : resolve(false);
            }
            )
        };
async function sentence(str){
    const newCheck = await lengthOf(str);
    newCheck ? console.log('Greater than 10') : console.log('Smaller than 11');
};
sentence(sent);
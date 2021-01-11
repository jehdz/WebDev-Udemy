//flat - method we can use on arrays

const array = [1,2,3,4,5];
array.flat()

const array2 = [1,[2,3],[4,5]];
array2.flat()
//array2 would return [1,2,3,4,5]


const array3 = [1, 2,[3 ,4,[5]]];
array3.flat()
//would return [1,2,3,4,[5]];

//we can send flat a parameter to tell it how deep you want it to go

const entries = ['bob', 'sally',,,,,, 'cindy'];
entries.flat() //this would clean up the array and remove the empty entries

//flapMap()


//trimStart()
//trimEnd()

const userEmail= '                 eddytheeagle@gmail.com'
const userEmail2= '_hjose2142@fgmail.com             '
userEmail.trimStart() // will trim the begining
userEmail2.trimEnd() // will trim the end


//fromEntries --> transforms a list of key value pairs into an object

const userProfiles = [['commanderTom', 23], ['jehdz', 21], ['hansel', 'team']]

const newObject = Object.fromEntries(userProfiles);
console.log(newObject);

//fromEntries tranforms arrays to objects
//entries transforms objects to arrays



//Try and catch


try {
    bob + 'hi'
    } catch {
        console.log('you messed up')
    }

//    this would throw and error because bob is an undefined variable
// the function would log the messsage










//    JavaScript code for ToDo list Game with Alert msg project.

let input = prompt("What do you want to like todo?");
let arr = ['array 1','array2'];

while(input !== 'quit' && input!=='q'){
    if(input === 'new'){
        const newone = prompt("enter a new todo list");
            arr.push(newone);
            console.log(`new element is ${newone}`);
    }
    else if(input === 'delete'){
        const delone = parseInt(prompt("enter the index of an element to delete"));
        if (!Number.isNaN(delone)) {
            const deleted = arr.splice(delone,1);
            console.log(`deleted element is ${deleted}`);

            // Alert message displays here!!
            alert('Alert!!    The element as been deleted..');

        } else {
            console.log("undifined number");
        }
    }
    else if(input === 'list'){

        // Information message displays here
        alert('Information!!    Your list of all elements has been displayed in the console section..');

        console.log("**************");
        for(let i=0;i<arr.length;i++){
            console.log(`${i}: ${arr[i]}`);
        }
        console.log("**************");
    }

       //   Warning message displays here.
    else if(input  !== 'list' && input !== 'new' && input !== 'delete'){
        alert("Warning!!    You entered a wrong key word. Please enter a proper key word.");
    }
    
    input = prompt("What do you want to like todo?");
}


// Success message displays here!!
confirm('Congratulations!!    you are successfully exited from the game..');

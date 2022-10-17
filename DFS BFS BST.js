class Node{
    constructor(val){
        this.val = val 
        this.left = null
        this.right = null
    }
}
var a = new Node(4)
var b = new Node(2)
var c = new Node(7)
var d = new Node(1)
var e = new Node(3)
var f = new Node(6)
var g = new Node(9)

a.left = b
a.right = c
b.right = e
b.left = d
c.right = g
c.left = f

function BFS(root){
    var queue = [ root ]
    while(queue.length > 0){
        const curr = queue.shift()
        alert(curr.val)
        
        if(curr.left !== null){
            queue.push(curr.left)
        }
        if(curr.right !== null){
            queue.push(curr.right)
        }
        
    }
    
}
function DFS(root){
    var stack = [ root ]
    while(stack.length > 0){
        const curr = stack.pop()
        alert(curr.val)
        if(curr.right !== null){
            stack.push(curr.right)
        }
        if(curr.left !== null){
            stack.push(curr.left)
        }
    }
    
    
}
function DFS1(root){
    const stack = [ root ]
    while(stack.lenght > 0 ){
        const curr = stack.pop()
        alert(curr.val)
        if(curr.left !== null){
            stack.push(curr.left)
        }
        if(curr.right !== null){
            stack.push(curr.right)
        }
        
    }
}

alert(DFS(a))

 
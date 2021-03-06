/* 
no sql mongo:
 collection === table
 document === row
 p1: {
    id
    name
    description
    comments: [
            {},
            {},
            {},
            {},
            {},
            {}
    ]
 }
 p1: {
    name
    description
    comments: [
            {},
            {},
            {},
            {},
            {},
            {}
    ]
 }


product-listing
    p1 > comments [c1,c3,c2,c1,c3,c2,c1,c3,c2]
    p2 > comments [c1,c3,c2,c3,c2]
    p3 > comments [c1,c3,c2,c1,c3,c2]

name | price | descripton | pId
p1                          p1
p1                          p2

product-comments
pId comments
p1 text
p1 text
p1 text
p1 text
p2 text
p2 text
p2 text


let users = [
    {
        id,
        name,
        ....
    }
]

let marks = [
    {
        userid,
        name,
        ....
    }
    {
        userid,
        name,
        ....
    }
    {
        userid,
        name,
        ....
    }
]


*/
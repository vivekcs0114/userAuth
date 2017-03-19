/**
 * Created by synerzip on 19/3/17.
 */

app.service("UserService",function () {
    this.users = [
        {
            "email": "rishabh@gmail.com",
            "mobile": "8009256485",
            "name": "Rishabh"
        }
    ];

    this.getUsers=function () {
        return this.users;
    } ;

});

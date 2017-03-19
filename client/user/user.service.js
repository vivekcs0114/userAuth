/**
 * Created by synerzip on 19/3/17.
 */

app.service("UserService", function ($http) {

    this.getUsers = function (server) {
        return $http.get(server + "/api/record");
    };

});

var jsonfile = require('jsonfile')
var file = 'tasks.json';


exports.get = function (req, res, next) {

    var data = {}
    var json = jsonfile.readFileSync(file);
    var time_planned=0, time_progress=0, time_completed=0;


    data.tasks_planned = json.filter(function (t) {
        return t.state==0;
    });
    data.tasks_progress = json.filter(function (t) {
        return t.state==1;
    });
    data.tasks_completed = json.filter(function (t) {
        return t.state==2;
    });


    data.tasks_planned.forEach(function (t) {
        time_planned += parseFloat(t.estimate);
    });
    data.tasks_progress.forEach(function (t) {
        time_progress += parseFloat(t.estimate);
    });
    data.tasks_completed.forEach(function (t) {
        time_completed += parseFloat(t.estimate);
    });

    data.time_planned = time_planned;
    data.time_progress = time_progress;
    data.time_completed = time_completed;

    res.send({data: data});
};

exports.put = function (req, res, next) {

    var id = req.params.id;
    var state = req.body.state;
    var data = jsonfile.readFileSync(file);

    var obj = data.filter(function (t) { return t.id == id })[0];
    var index = data.indexOf(obj);

    obj.state = state;

    data[index] = obj;

    jsonfile.writeFile(file, data, function (err) {
        exports.get(req, res, next);
    });
};

exports.post = function (req, res, next) {

    var id = +new Date;
    var title = req.body.title;
    var time = req.body.time;
    var state = req.body.state;
    var description = req.body.description;

    var data = jsonfile.readFileSync(file);

    var obj = {
        id: id,
        name: title,
        estimate: time,
        state: state,
        description: description
    }

    data.push(obj)

    jsonfile.writeFile(file, data, function (err) {
        exports.get(req, res, next);
    });
};

exports.delete = function (req, res, next) {

    var id = req.params.id;

    var data = jsonfile.readFileSync(file);

    var obj = data.filter(function (t) { return t.id == id })[0];
    var index = data.indexOf(obj);

    data.splice(index,1);

    jsonfile.writeFile(file, data, function (err) {
        exports.get(req, res, next);
    });
};
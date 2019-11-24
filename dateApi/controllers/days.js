exports.getDays = (req, res, next) => {
  const nbreDays = req.body.nbreDays;
  const days = getNewDays(nbreDays).splice(" ");

  const data = [];

  for (let i = 0; i < days.length; i++) {
    const dayObj = {};
    let day = days[i].split(" ");
    dayObj["day_name"] = day[0];
    dayObj["month_name"] = day[1];
    dayObj["day_nbre"] = day[2];
    data.push(dayObj);
  }

  res.status(200).json(data);
};

exports.getTimes = (req, res, next) => {
  const data = getNewTimes();
  res.status(200).json(data);
};

function getNewDays(nbreDays) {
  let i = 1;
  const date = new Date();
  date.setDate(date.getDate() + nbreDays);
  const days = [];
  while (i <= 4) {
    days.push(new Date(date).toDateString());
    date.setDate(date.getDate() + 1);
    i++;
  }

  return days;
}

function getNewTimes() {
  const date = new Date();
  let i = 0;
  const times = [];
  while (date.getHours() + i <= 23) {
    let timeObject = {};
    let hour = date.getHours() + i;
    hour < 10 ? timeObject["time"] = "0" +hour.toString() + ":" + "00" : timeObject["time"] = hour.toString() + ":" + "00";
    
    times.push(timeObject);
    timeObject = {};
    
    hour < 10 ? timeObject["time"] = "0" + hour.toString() + ":" + "30" : timeObject["time"] = hour.toString() + ":" + "30";

    times.push(timeObject);
    i++;
  }

  return times;
}

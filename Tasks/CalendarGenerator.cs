using Ical.Net;
using Ical.Net.CalendarComponents;
using Ical.Net.DataTypes;
using Ical.Net.Serialization;
using Newtonsoft.Json.Linq;
using System;

namespace ReactDemo.Tasks
{
    internal sealed class CalendarGenerator
    {
        public static string Process(JArray jsonArray)
        {
            var calendar = new Calendar();

            var now = DateTime.Now;

            foreach (var jsonObject in jsonArray)
            {
                var label = jsonObject["label"].ToString();
                var due = jsonObject["due"]?.ToString();

                var start = due != null
                    ? new CalDateTime(due)
                    : new CalDateTime(now);

                var todoItem = new Todo
                {
                    Description = label,
                    Start = start,
                };

                calendar.Todos.Add(todoItem);
            }

            var serializer = new CalendarSerializer();
            var result = serializer.SerializeToString(calendar);
            return result;
        }
    }
}

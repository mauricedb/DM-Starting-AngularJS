using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DM_Starting_AngularJS.Api
{
    public class PeopleController : ApiController
    {

        public IEnumerable<Person> Get()
        {
            return People;
        }

        public Person Get(string id)
        {
            return People.Single(p => p.Id == id);
        }

        public Person Put(Person person)
        {
            var original = People.Single(p => p.Id == person.Id);
            var index = Array.IndexOf(People, original);
            People[index] = person;
            return person;
        }



        private static readonly Person[] People = {
            new Person{
                Id= "1",
                FirstName= "Park",
                LastName= "Cote"
            }, new Person{
                Id= "2",
                FirstName= "Terry",
                LastName= "Dalton"
            }, new Person{
                Id= "3",
                FirstName= "Elinor",
                LastName= "Bartlett"
            }, new Person{
                Id= "4",
                FirstName= "Wynn",
                LastName= "Cash"
            }, new Person{
                Id= "5",
                FirstName= "Molina",
                LastName= "Hull"
            }, new Person{
                Id= "6",
                FirstName= "Kellie",
                LastName= "Diaz"
            }, new Person{
                Id= "7",
                FirstName= "Marla",
                LastName= "Sherman"
            }, new Person{
                Id= "8",
                FirstName= "Baldwin",
                LastName= "Noble"
            }, new Person{
                Id= "9",
                FirstName= "Isabelle",
                LastName= "Moss"
            }, new Person{
                Id= "10",
                FirstName= "Marsh",
                LastName= "Carney"
            }, new Person{
                Id= "11",
                FirstName= "Solis",
                LastName= "Williams"
            }, new Person{
                Id= "12",
                FirstName= "Jeanine",
                LastName= "Hardin"
            }, new Person{
                Id= "13",
                FirstName= "Fanny",
                LastName= "Pacheco"
            }, new Person{
                Id= "14",
                FirstName= "Sondra",
                LastName= "Gibson"
            }, new Person{
                Id= "15",
                FirstName= "Perez",
                LastName= "Simmons"
            }};
    }

    public class Person
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}

const context = {
  teas: [
    {
      name: 'Fall Berry Blitz Tea',
      image: 'https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg?_gl=1*1eijzxi*_ga*MTI3NzcwMDAxNy4xNjc1Mjc3MTAz*_ga_3LRZM6TM9L*MTY3NTgxNzA1Ny42LjEuMTY3NTgxNzI2Ny41MS4wLjA.'
    },
    {
      name: 'Spiced Rum Tea',
      image: 'https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg?_gl=1*1eijzxi*_ga*MTI3NzcwMDAxNy4xNjc1Mjc3MTAz*_ga_3LRZM6TM9L*MTY3NTgxNzA1Ny42LjEuMTY3NTgxNzI2Ny41MS4wLjA.'
    },
    {
      name: 'Seasonal Donuts',
      image: 'https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg?_gl=1*h99se9*_ga*MTI3NzcwMDAxNy4xNjc1Mjc3MTAz*_ga_3LRZM6TM9L*MTY3NTgyMDQ4OC43LjAuMTY3NTgyMDQ4OC42MC4wLjA.'
    },
    {
      name: 'Myrtle Ave Tea',
      image: 'https://content.codecademy.com/courses/freelance-1/unit-4/img-myrtle-ave.jpg?_gl=1*h99se9*_ga*MTI3NzcwMDAxNy4xNjc1Mjc3MTAz*_ga_3LRZM6TM9L*MTY3NTgyMDQ4OC43LjAuMTY3NTgyMDQ4OC42MC4wLjA.'
    },
    {
      name: 'Bedford Bizarre Tea',
      image: 'https://content.codecademy.com/courses/freelance-1/unit-4/img-bedford-bizarre.jpg?_gl=1*h99se9*_ga*MTI3NzcwMDAxNy4xNjc1Mjc3MTAz*_ga_3LRZM6TM9L*MTY3NTgyMDQ4OC43LjAuMTY3NTgyMDQ4OC42MC4wLjA.'
    }
  ],
  locations: [
    {
      name: 'Downtown',
      address: '384 West 4th St',
      address2: 'Suite 108',
      city: 'Portland, Maine'
    },
    {
      name: 'East Bayside',
      address: '3433 Phisherman\'s Avenue',
      address2: '(Northwest Corner)',
      city: 'Portland, Maine'
    },
    {
      name: 'Oakdale',
      address: '515 Crescent Avenue',
      address2: 'Second Floor',
      city: 'Portland, Maine'
    }
  ]
};

// Teas of the Month
const source = document.getElementById("templateHB-teas").innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(context);
document.getElementById("teacardinfo").innerHTML = compiledHtml;

// Locations
const source2 = document.getElementById("templateHB-loc").innerHTML;
const template2 = Handlebars.compile(source2);
const compiledHtml2 = template2(context);
document.getElementById("locationcardinfo").innerHTML = compiledHtml2;


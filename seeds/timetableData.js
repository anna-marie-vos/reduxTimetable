
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('timetable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('timetable').insert({day: 'Monday', period: '1', subject: 'History' , teacher: 'Jim Beam' , classroom: '104' , details: 'Level 2, Aotearoa Musket Wars'  }),
        knex('timetable').insert({day: 'Tuesday', period: '2', subject: 'Maths', teacher: 'Professor Plum', classroom: '215', details: 'Level 2, Poisson Distribution'  }),
        knex('timetable').insert({day: 'Wednesday', period: '3', subject: 'Science', teacher: 'Albert Einstein', classroom: '167' , details: 'Level 3, The Physics of Energy' }),
        knex('timetable').insert({day: 'Thursday', period: '3', subject: 'English' , teacher: 'J.K. Rowling' , classroom: '9.75' , details: 'Level 3, Magical Classics and Poetry'  }),
        knex('timetable').insert({day: 'Friday' , period: '1' , subject: 'Art' , teacher: 'Mr Goldie', classroom: '327' , details: 'Level 2, Painting with focus on Portraiture'  }),
      ]);
    });
};

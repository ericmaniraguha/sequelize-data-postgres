'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id:1,
          name:'Kamaro Didier',
          email:'kamarod@gmail.com',
          role:'Manager',
          created_at: new Date(),
          updated_at : new Date()
        },
        {
          id:2,
          name:'Ndayisenga Vava',
          email:'vava@gmail.com',
          role:'Senior',
          created_at: new Date(),
          updated_at : new Date()
        },
        {
          id:3,
          name:'Alice M.',
          email:'alice_m@gmail.com',
          role:'CFO',
          created_at: new Date(),
          updated_at : new Date()
        },
        {
          id:3,
          name:'M. Kamuhizi',
          email:'kamuhizi@gmail.com',
          role:'Accountant',
          created_at: new Date(),
          updated_at : new Date()
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'channel',
      [
        {
          id:1,
          name:'Channel I',
          user_id:1,
          created_at: new Date(),
          updated_at : new Date()
        },
        {
          id:2,
          name:'Channel II',
          user_id:1,
          created_at: new Date(),
          updated_at : new Date()
        },
        {
          id:3,
          name:'Channel III',
          user_id:3,
          created_at: new Date(),
          updated_at : new Date()
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'video',
      [
        {
          id:1,
          title:'video I',
          channel_id:1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id:2,
          title:'video II',
          channel_id:1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id:3,
          title:'video III',
          channel_id:2,
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('channel', null, bulkDeleteOptions);
     await queryInterface.bulkDelete('video', null, bulkDeleteOptions);
     await queryInterface.bulkDelete('user', null, bulkDeleteOptions);
  }
};

describe('Бонус', function () {

    it('Авторизация-зачесть поездку', function () {
         cy.visit('https://rzd-bonus.ru/?ysclid=m84hlyu9mr973447599');
         cy.get('.login > .btn').click();
         cy.get('#au_login').type('svetafedyushina01@gmail.com');
         cy.get('#au_pass').type('Sveta2001');
         cy.get('.img-eye-show').click();
         cy.get('.btn_blue').click();
         cy.get('.menu > ul > :nth-child(1) > a').contains('Скидки и суперакции');
         cy.get('.menu > ul > :nth-child(2) > a').contains('Акции ФПК');
         cy.get('.menu > ul > :nth-child(3) > a').contains('Копить баллы быстрее');
         cy.get('.menu > ul > :nth-child(4) > a').contains('Клуб путешественников');
         cy.get('.lk_menu > ul > :nth-child(4) > a').click();

     })
 }) 
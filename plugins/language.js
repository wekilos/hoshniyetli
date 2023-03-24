export default (context, inject) => {
    inject('tt', (tm, ru, en) => {
        if (context.app.i18n.locale === 'tm') return tm
        else if(context.app.i18n.locale==='ru') return ru
        else return en
        }) 
}
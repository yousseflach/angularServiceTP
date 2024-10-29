export class AcountService {
    acounts: {title: string, status: string}[] = [
        { title: 'element1', status: 'active'},
        { title: 'element2', status: 'inActive'},
        { title: 'element3', status: 'unknown'},
        { title: 'element4', status: 'inActive'},
        { title: 'element5', status: 'inActive'},
        { title: 'element6', status: 'active'},
        { title: 'element7', status: 'inActive'},
        { title: 'element8', status: 'unknown'},
        { title: 'element9', status: 'inActive'},
        { title: 'element10', status: 'inActive'}
    ];

    changeStatus(status: string, id: number){
        this.acounts[id].status = status;
    }

    addNewAcount(ntitle: string, nstatus: string){
        this.acounts.unshift({title: ntitle, status: nstatus});
    }
}
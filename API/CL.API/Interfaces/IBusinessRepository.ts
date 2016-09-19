import model = require("../Models/businessModel");
export interface IBusinessRepository {
    register(business: model.BusinessModel): Promise<model.BusinessModel>;
    unRegister(id: number): Promise<number>;
    update(business: model.BusinessModel): Promise<model.BusinessModel>;
    addOffer(offer: model.BusinessOfferModel): Promise<model.BusinessOfferModel>;
    updateOffer(offer: model.BusinessOfferModel): Promise<model.BusinessOfferModel>;
    deactivateOffer(id:number):Promise<boolean>;
}


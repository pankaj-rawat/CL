import model = require("../Models/businessModel");
export interface BusinessModel {
    register(business: model.BusinessModel): Promise<model.BusinessModel>;
    unRegister(id: number): Promise<number>;
    update(business: model.BusinessModel): Promise<model.BusinessModel>;
    addOffer();
    updateOffer();
    deleteOffer();
}
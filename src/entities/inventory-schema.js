import * as Joi from 'joi';

export class InventorySchema {

  constructor () {

    this.JOI_CONSTANTS = {
      stringMandatory: Joi.string().required(),
      stringNonMandatory: Joi.string().allow(null, ''),
      mobileMandatory: Joi.string().length(10).required(),
      booleanMandatory: Joi.boolean().required(),
      booleanNonMandatory: Joi.boolean().allow(null, '')
    };

  }

  getUserServerSchema () {

    return {
        invoiceNumber: 'invoiceNumber',
        invoiceDate: 'invoiceDate',
        stockInDate: 'stockInDate',
        frightHandlingCharge: 'frightHandlingCharge',
        totalDiscount: 'totalDiscount',
        totalInvoiceAmount: 'totalInvoiceAmount',
        isActive: 'isActive?',
        isReverted: 'isReverted?',
      createdBy: 'createdBy?',
      createdDate: 'createdDate?',
      modifiedBy: 'modifiedBy?',
      modifiedDate: 'modifiedDate?',
      revertedBy:"revertedBy?",
      revertedDate: 'revertedDate?',
    };

  }

  getUserClientSchema () {

    return {

        inventoryId: 'inventoryId',
    };

  }

  getCreateUserSchema () {

    return Joi.object().keys({
        invoiceNumber: this.JOI_CONSTANTS.stringMandatory,
        invoiceDate: this.JOI_CONSTANTS.stringMandatory,
        stockInDate: this.JOI_CONSTANTS.stringMandatory,
        frightHandlingCharge: this.JOI_CONSTANTS.stringMandatory,
        totalDiscount: this.JOI_CONSTANTS.stringNonMandatory,
        totalInvoiceAmount: this.JOI_CONSTANTS.stringMandatory,
      isActive: this.JOI_CONSTANTS.booleanNonMandatory,
      isReverted: this.JOI_CONSTANTS.booleanNonMandatory,
      createdBy: this.JOI_CONSTANTS.stringNonMandatory,
      createdDate: this.JOI_CONSTANTS.stringNonMandatory,
      modifiedBy: this.JOI_CONSTANTS.stringNonMandatory,
      modifiedDate: this.JOI_CONSTANTS.stringNonMandatory,
      revertedBy: this.JOI_CONSTANTS.stringNonMandatory,
      revertedDate: this.JOI_CONSTANTS.stringNonMandatory
    });

  }

  getUpdateUserSchema () {

    return Joi.object().keys({
        invoiceNumber: this.JOI_CONSTANTS.stringMandatory,
        invoiceDate: this.JOI_CONSTANTS.stringMandatory,
        stockInDate: this.JOI_CONSTANTS.stringMandatory,
        frightHandlingCharge: this.JOI_CONSTANTS.stringMandatory,
        totalDiscount: this.JOI_CONSTANTS.stringNonMandatory,
        totalInvoiceAmount: this.JOI_CONSTANTS.stringMandatory,
      isActive: this.JOI_CONSTANTS.booleanNonMandatory,
      isReverted: this.JOI_CONSTANTS.booleanNonMandatory,
      createdBy: this.JOI_CONSTANTS.stringNonMandatory,
      createdDate: this.JOI_CONSTANTS.stringNonMandatory,
      modifiedBy: this.JOI_CONSTANTS.stringNonMandatory,
      modifiedDate: this.JOI_CONSTANTS.stringNonMandatory,
      revertedBy: this.JOI_CONSTANTS.stringNonMandatory,
      revertedDate: this.JOI_CONSTANTS.stringNonMandatory
    });

  }

}

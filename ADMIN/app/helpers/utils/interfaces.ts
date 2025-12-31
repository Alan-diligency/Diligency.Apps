export interface LocaleType {
    en?: string
    fr?: string
}

export interface MenuType {
    _id: string
    key?: string
    name?: LocaleType
    icon?: string
    link?: string
    description?: LocaleType
    children?: MenuType[]
}

export class ContantDataType {
    _key!: string
    field!: string
    fieldKey!: string
    errorColor!: 'red' | 'green' | 'blue' | string
    type!: 'TextInput' | 'TextArea' | 'Select' | 'Checkbox' | 'Radio' | 'Switch' | 'DatePicker' | 'FileUpload'
    required!: boolean
    label!: LocaleType
    error!: LocaleType
}

export interface MailContentType {
    from: string
    to: string
    subject: string
    html: string
}

export interface SocialType {
    _key: string;
    icon: string;
    link: string;
    name: string;
};

export interface ApplicationButtontype {

}

export interface ObjectOfFieldType {
    _key: string;
    error: LocaleType;
    errorColor: string;
    field: string;
    fieldKey: string;
    label: LocaleType;
    required: boolean;
    type: string;
};

export interface ObjectOfFieldMenuType {
    _id: string;
    _key: LocaleType;
    description: string;
    icon: string;
    key: string;
    link: string;
    name: LocaleType;
};


export interface ModalConfirmDataType {
    title: string
    subtitle: string
    data: any
}
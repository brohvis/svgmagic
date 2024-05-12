interface IconSets {
    [key: string]: string[];
}
interface SetHrefs {
    [key: string]: {
        [iconName: string]: string | false;
    };
}
interface DefaultHrefs {
    [iconName: string]: string;
}
interface StyleConfig {
    [key: string]: string[];
}
interface ConfigType {
    iconSets: IconSets;
    setHrefs: SetHrefs;
    defaultHrefs: DefaultHrefs;
}

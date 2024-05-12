export interface IconSets {
    [key: string]: string[];
  }
  
  export interface SetHrefs {
    [key: string]: {
      [iconName: string]: string | false;
    };
  }
  
  export interface DefaultHrefs {
    [iconName: string]: string;
  }
  
  export interface StyleConfig {
    [key: string]: string[];
  }
  
  export interface ConfigType {
    iconSets: IconSets;
    setHrefs: SetHrefs;
    defaultHrefs: DefaultHrefs;
  }
  
  export interface SVGMProps {
    kind: string;
    setName?: string;
    href?: string;
    size?: string;
    className?: string;
  }
export declare const importAll: (requireContext: {
    keys: () => string[];
    (path: string): any;
}) => {
    [key: string]: React.ComponentType<any>;
};
export declare const renderIcon: (kind: string, iconFiles: {
    [key: string]: React.ComponentType<any>;
}, config: ConfigType, href?: string, size?: string, className?: string, setHrefs?: {
    [key: string]: string | false;
}) => {
    kind: string;
} | null;

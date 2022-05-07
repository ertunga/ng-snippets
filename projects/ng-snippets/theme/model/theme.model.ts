export interface ThemeConfig {
    themes: { name: string; value: string }[];
    attribute: string;
    selector: 'html' | 'body';
}

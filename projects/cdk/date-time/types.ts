/**
 * * DMY - dd.mm.yyyy
 * * MDY - mm.dd.yyyy
 * * YMD - yyyy.mm.dd
 * TODO: Change to be MaskitoDateMode compatible in v5
 */
export type TuiDateMode = 'DMY' | 'MDY' | 'YMD';
/**
 * TODO(v5): replace all its usage by MaskitoTimeMode and delete it
 * @deprecated use `MaskitoTimeMode` (from `@maskito/kit`) instead
 */
export type TuiTimeMode =
    | 'HH AA'
    | 'HH:MM AA'
    | 'HH:MM:SS AA'
    | 'HH:MM:SS.MSS AA'
    | 'HH:MM:SS.MSS'
    | 'HH:MM:SS'
    | 'HH:MM'
    | 'HH'
    | 'MM:SS.MSS'
    | 'MM:SS'
    | 'MM.SS.MSS' // TODO(v5): delete (exists only for Maskito@3 compatibility)
    | 'SS.MSS';

/**
 * Optionally has year and/or month and/or day
 */
export interface TuiDayLike extends TuiMonthLike {
    readonly day?: number;
}

/**
 * Optionally has year and/or month
 */
export interface TuiMonthLike extends TuiYearLike {
    readonly month?: number;
}

/**
 * Optionally has year
 */
export interface TuiYearLike {
    readonly year?: number;
}

export interface TuiTimeLike {
    readonly hours?: number;
    readonly minutes?: number;
    readonly ms?: number;
    readonly seconds?: number;
}

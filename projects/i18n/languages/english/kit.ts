import type {TuiLanguageKit} from '@taiga-ui/i18n/types';

export const TUI_ENGLISH_LANGUAGE_KIT: TuiLanguageKit = {
    cancel: 'Cancel',
    done: 'Done',
    more: 'More',
    otherDate: 'Other date...',
    showAll: 'Show all',
    hide: 'Hide',
    mobileCalendarTexts: ['Choose day', 'Choose range', 'Choose days'],
    range: ['from', 'to'],
    countTexts: ['Plus', 'Minus'],
    time: {
        'MM:SS': 'MM:SS',
        'HH:MM': 'HH:MM',
        'HH:MM AA': 'HH:MM AA',
        'HH:MM:SS': 'HH:MM:SS',
        'HH:MM:SS AA': 'HH:MM:SS AA',
        'HH:MM:SS.MSS': 'HH:MM:SS.MSS',
        'HH:MM:SS.MSS AA': 'HH:MM:SS.MSS AA',
        'HH AA': 'HH AA',
        HH: 'HH',
        'MM:SS.MSS': 'MM:SS.MSS',
        'MM.SS.MSS': 'MM.SS.MSS',
        'SS.MSS': 'SS.MSS',
    },
    // TODO(v5): transform to uppercase for ALL languages
    dateTexts: {
        DMY: 'dd.mm.yyyy',
        MDY: 'mm.dd.yyyy',
        YMD: 'yyyy.mm.dd',
    },
    digitalInformationUnits: ['B', 'KiB', 'MiB'],
    passwordTexts: ['Show password', 'Hide password'],
    copyTexts: ['Copy', 'Copied'],
    shortCalendarMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    pagination: ['Previous page', 'Next page'],
    fileTexts: {
        loadingError: 'Upload failed',
        preview: 'Preview',
        remove: 'Remove',
    },
    inputFileTexts: {
        defaultLabelSingle: 'or drop\u00A0it\u00A0here',
        defaultLabelMultiple: 'or drop\u00A0them\u00A0here',
        defaultLinkSingle: 'Choose a file',
        defaultLinkMultiple: 'Choose files',
        maxSizeRejectionReason: 'File is larger than',
        formatRejectionReason: 'Wrong file type',
        drop: 'Drop file here',
        dropMultiple: 'Drop files here',
    },
    multiSelectTexts: {
        all: 'Select all',
        none: 'Select none',
    },
    confirm: {
        yes: 'Yes',
        no: 'No',
    },
    previewTexts: {
        rotate: 'Rotate',
    },
    zoomTexts: {
        zoomOut: 'Zoom out',
        zoomIn: 'Zoom in',
        reset: 'Reset',
    },
    phoneSearch: 'Type country or code',
};

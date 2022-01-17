import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';

import allCoursesTermsTabsPlugin from '@artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin';
import assignmentsBulkAssignToPlugin from '@artevelde-uas/canvas-lms-assignments-bulk-assign-to-plugin';
import bbbCloseRecordingReminderPlugin from '@artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin';
import bbbDefaultSettingsPlugin from '@artevelde-uas/canvas-lms-bbb-default-settings-plugin';
import betterLeftMenuPlugin from '@artevelde-uas/canvas-lms-better-left-menu-plugin';
import clearAllSectionsDefaultPlugin from '@artevelde-uas/canvas-lms-clear-all-sections-default-plugin';
import enableCourseRecycleBinPlugin from '@artevelde-uas/canvas-lms-enable-course-recycle-bin-plugin';
import enhancedLoginPagePlugin from '../../packages/plugins/enhanced-login-page/src/';
import exportCourseGroupsPlugin from '@artevelde-uas/canvas-lms-export-course-groups-plugin';
import fileExplorerEnhancementsPlugin from '@artevelde-uas/canvas-lms-file-explorer-enhancements-plugin';
import fixFilesNavigationPlugin from '@artevelde-uas/canvas-lms-fix-files-navigation-plugin';
import gradebookDisclaimerPlugin from '@artevelde-uas/canvas-lms-gradebook-disclaimer-plugin';
import installedPluginsListPlugin from '@artevelde-uas/canvas-lms-installed-plugins-list-plugin';
import msTeamsLinkPopupPlugin from '@artevelde-uas/canvas-lms-ms-teams-links-plugin';
import onlyShowSelectedModulePlugin from '@artevelde-uas/canvas-lms-only-show-selected-module-plugin';
import restrictSISCourseSettingsPlugin from '@artevelde-uas/canvas-lms-restrict-sis-course-settings-plugin';

import './index.css';


addPlugin(allCoursesTermsTabsPlugin);
addPlugin(assignmentsBulkAssignToPlugin);
addPlugin(bbbCloseRecordingReminderPlugin);
addPlugin(bbbDefaultSettingsPlugin, {
    duration: 90,
    enableRecording: true,
    noTimeLimit: true
});
addPlugin(betterLeftMenuPlugin, {
    classicStyles: true,
    thinScrollbar: true,
    showScrollbar: 'hover',
    resetOnScroll: true
});
addPlugin(clearAllSectionsDefaultPlugin);
addPlugin(enableCourseRecycleBinPlugin);
addPlugin(enhancedLoginPagePlugin, {
    intro: 'Welkom op de aanmeldingspagina van Canvas, de digitale leeromgeving van de Arteveldehogeschool.',
    studentStaff: {
        image: require('../../assets/students.jpg'),
        title: 'Studenten & Docenten',
        text: 'Aanmelden met je Artevelde account',
        loginUrl: 'microsoft/5'
    },
    guest: {
        image: require('../../assets/external.jpg')
    }
});
addPlugin(exportCourseGroupsPlugin);
addPlugin(fileExplorerEnhancementsPlugin);
addPlugin(fixFilesNavigationPlugin);
addPlugin(gradebookDisclaimerPlugin);
addPlugin(installedPluginsListPlugin);
addPlugin(msTeamsLinkPopupPlugin);
addPlugin(onlyShowSelectedModulePlugin);
addPlugin(restrictSISCourseSettingsPlugin, {
    disable: {
        image: true,
        name: true,
        code: true,
        blueprint: true,
        template: true,
        timeZone: true,
        account: true,
        term: true,
        participation: true,
        language: true,
        storage: true,
        speedGraderFilter: true,
        gradingScheme: true,
        participation: true,
        license: true,
        copyright: true,
        visibility: true,
        format: true,
        offline: true,
        description: true,
        moreOptions: true
    }
});

run();

import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';

import allCoursesTermsTabsPlugin from '@artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin';
import assignmentsBulkAssignToPlugin from '@artevelde-uas/canvas-lms-assignments-bulk-assign-to-plugin';
import betterLeftMenuPlugin from '@artevelde-uas/canvas-lms-better-left-menu-plugin';
import clearAllSectionsDefaultPlugin from '@artevelde-uas/canvas-lms-clear-all-sections-default-plugin';
import enableCourseRecycleBinPlugin from '@artevelde-uas/canvas-lms-enable-course-recycle-bin-plugin';
import enhancedLoginPagePlugin from '../../packages/plugins/enhanced-login-page/src/';
import exportCourseGroupsPlugin from '@artevelde-uas/canvas-lms-export-course-groups-plugin';
import fileExplorerEnhancementsPlugin from '@artevelde-uas/canvas-lms-file-explorer-enhancements-plugin';
import fixFilesNavigationPlugin from '@artevelde-uas/canvas-lms-fix-files-navigation-plugin';
import gradebookDisclaimerPlugin from '@artevelde-uas/canvas-lms-gradebook-disclaimer-plugin';
import installedPluginsListPlugin from '@artevelde-uas/canvas-lms-installed-plugins-list-plugin';
import onlyShowSelectedModulePlugin from '@artevelde-uas/canvas-lms-only-show-selected-module-plugin';
import restrictSISCourseSettingsPlugin from '@artevelde-uas/canvas-lms-restrict-sis-course-settings-plugin';

import './index.css';


addPlugin(allCoursesTermsTabsPlugin);
addPlugin(assignmentsBulkAssignToPlugin);
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
addPlugin(gradebookDisclaimerPlugin, {
    message: 'This is a disclaimer!',
    modalTitle: 'Indicative partial grade',
    modalText: `
        <blockquote>
            <p>An indicative partial grade is a grade that indicates the extent to which the student has acquired competences of a course unit or parts thereof. The indicative partial grade is preliminary data with a view to support, remediation opportunities and promoting the study progress.</p>
            <footer>
                <cite>&mdash; <a href="https://example.org/student/studycontract.pdf">
                    Student Study Contract</a></cite>
            </footer>
        </blockquote>
    `,
    showOnAssignmentsPage: true
});
addPlugin(installedPluginsListPlugin);
addPlugin(onlyShowSelectedModulePlugin);
addPlugin(restrictSISCourseSettingsPlugin);

run();

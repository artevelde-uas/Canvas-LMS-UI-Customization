import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';

import assignmentBulkOverridesPlugin from '@artevelde-uas/canvas-lms-assignments-bulk-assign-to-plugin';
import clearAllSectionsDefaultPlugin from '@artevelde-uas/canvas-lms-clear-all-sections-default-plugin';
import enableCourseRecycleBinPlugin from '@artevelde-uas/canvas-lms-enable-course-recycle-bin-plugin';
import enhancedLoginPagePlugin from '../../packages/plugins/enhanced-login-page/src/';
import exportCourseGroupsPlugin from '@artevelde-uas/canvas-lms-export-course-groups-plugin';
import fileExplorerEnhancementsPlugin from '@artevelde-uas/canvas-lms-file-explorer-enhancements-plugin';
import fixFilesNavigationPlugin from '@artevelde-uas/canvas-lms-fix-files-navigation-plugin';

import './index.css';


addPlugin(assignmentBulkOverridesPlugin);
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

run();

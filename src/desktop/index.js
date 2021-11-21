import canvas from '@artevelde-uas/canvas-lms-app';

import enableCourseRecycleBinPlugin from '@artevelde-uas/canvas-lms-enable-course-recycle-bin-plugin';
import enhancedLoginPagePlugin from '../../packages/plugins/enhanced-login-page/src/';
import exportCourseGroupsPlugin from '@artevelde-uas/canvas-lms-export-course-groups-plugin';
import fileExplorerEnhancementsPlugin from '@artevelde-uas/canvas-lms-file-explorer-enhancements-plugin';
import fixFilesNavigationPlugin from '@artevelde-uas/canvas-lms-fix-files-navigation-plugin';

import './index.css';


canvas.addPlugin(enableCourseRecycleBinPlugin);
canvas.addPlugin(enhancedLoginPagePlugin, {
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
canvas.addPlugin(exportCourseGroupsPlugin);
canvas.addPlugin(fileExplorerEnhancementsPlugin);
canvas.addPlugin(fixFilesNavigationPlugin);

canvas.run();

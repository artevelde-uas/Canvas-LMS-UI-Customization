import canvas from '@artevelde-uas/canvas-lms-app';

import enableCourseRecycleBinPlugin from '@artevelde-uas/canvas-lms-enable-course-recycle-bin-plugin';
import exportCourseGroupsPlugin from '@artevelde-uas/canvas-lms-export-course-groups-plugin';
import fileExplorerEnhancementsPlugin from '@artevelde-uas/canvas-lms-file-explorer-enhancements-plugin';
import fixFilesNavigationPlugin from '@artevelde-uas/canvas-lms-fix-files-navigation-plugin';

import './index.css';


canvas.addPlugin(enableCourseRecycleBinPlugin);
canvas.addPlugin(exportCourseGroupsPlugin);
canvas.addPlugin(fileExplorerEnhancementsPlugin);
canvas.addPlugin(fixFilesNavigationPlugin);

canvas.run();

/**
 * Upload this file to a 'Development' theme on your Canvas LMS.
 * Then run `yarn serve` and `yarn watch'.
 * After each change in the code, just refresh the browser (no need to re-upload the compiled JS)
 */
{
    const script = document.createElement('script');

    script.setAttribute('src', 'http://localhost:5000/desktop.dev.js');
    script.setAttribute('defer', 'defer');
    document.head.appendChild(script);
}

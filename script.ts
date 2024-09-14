(function() {
    const toggleSkillsBtn = document.getElementById('toggle-skills');
    const skillsSection = document.getElementById('skills');

    toggleSkillsBtn?.addEventListener('click', () => {
        if (skillsSection?.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection!.style.display = 'none';
        }
    });
})();



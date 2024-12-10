function skillsMember(): void {
  const member = new Member();
  member.skills = [
    new Skill('JavaScript', 5),
    new Skill('TypeScript', 4),
    new Skill('Python', 3),
  ];
  member.skills.forEach((skill) => {
    console.log(skill.name, skill.level);
  });
}
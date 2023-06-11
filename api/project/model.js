const db = require("../../data/dbConfig");

async function getProjectById(project_id) {
  const project = await db("projects").where("project_id", project_id).first();

  return project;
}

async function getAllProjects() {
  const projects = await db("projects");

  return projects.map((project) => {
    if (project.project_completed === 1) {
      return { ...project, project_completed: true };
    } else {
      return { ...project, project_completed: false };
    }
  });
}

async function createNewProject(project) {
  const [projectId] = await db("projects").insert(project);
  const newProject = await db("projects")
    .where("project_id", projectId)
    .first();

  if (newProject.project_completed === 1) {
    return { ...newProject, project_completed: true };
  } else {
    return { ...newProject, project_completed: false };
  }
}

module.exports = { getProjectById, getAllProjects, createNewProject };

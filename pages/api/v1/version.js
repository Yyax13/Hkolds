import fs from 'fs';
import path from 'path'

export default (request, response) => {
    const packageJsonPath = path.join(process.cwd(), '../../../package.json');
    try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
        const version = packageJson.version;
        response.status(200).json(
            {
                status: "Deploy",
                projectVersion: `${version}`
            }
        );
    } catch (error) {
        response.status(500).json({error: "ERROR"})
    }
        
};
import Journey from "../../../../../models/journey/Journey";
import User from "../../../../../models/user/User";

interface JourneyInvitationsPageProps {
    route: {
        params: {
            journey?: Journey,
            newInvitations?: {email:string; isCorrect: Boolean}[],
            allUsers: User[]
        }
    }
}

export default JourneyInvitationsPageProps;
from .base import Base

class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "PBS environment variables"
        self.mark = "[PBS]"
        self.filetypes = ["sh"]

    def gather_candidates(self, context):
        return [
                "PBS_JOBID",
                "PBS_JOBNAME",
                "PBS_NODEFILE",
                "PBS_NODENUM",
                "PBS_NP",
                "PBS_NUM_NODES",
                "PBS_NUM_PPN",
                "PBS_O_HOST",
                "PBS_O_WORKDIR",
                "PBS_SERVER",
                "PBS_TASKNUM",
                ]

package io.bytethatt.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.bytethatt.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
    
